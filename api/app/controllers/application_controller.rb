# frozen_string_literal: true

# Base class from which most controllers will inherit from
class ApplicationController < ActionController::Base
  include Response
  include ExceptionHandler

  before_action :authenticate_request 
  attr_reader :current_user 

  def index
    render :file => 'public/index.html'
  end  
  
  private 

  def authenticate_request
    print(request.headers)
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end

  def authorize_user
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user.is_a?(User)
  end  

  def authorize_applicant
    
  end   
end
