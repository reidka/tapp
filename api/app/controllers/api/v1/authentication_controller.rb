module Api::V1
  class AuthenticationController < ApplicationController
    skip_before_action :authenticate_request
  
    def authenticate
      #logger.info(params[:utorid])
      arg = request.headers['HTTP_X_FORWARDED_USER'] || params['utorid']
      command = AuthenticateUser.call(arg)
  
      if command.success?
        render json: command.result
      else
        render json: { error: command.errors }, status: :unauthorized
      end
    end
  end
end 