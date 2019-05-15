module Api::V1
  class AuthenticationController < ApplicationController
    skip_before_action :authenticate_request
  
    def authenticate
      logger.info(params[:utorid])
      command = AuthenticateUser.call(params[:utorid])
  
      if command.success?
        render json: command.result
      else
        render json: { error: command.errors }, status: :unauthorized
      end
    end
  end
end 