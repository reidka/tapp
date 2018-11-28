# frozen_string_literal: true

# This module is responsible for setting the session object with the correct utorid
module Authentication
  def authenticate
    if ENV['RAILS_ENV'] == 'development'
      session[:utorid] = 'wuhao30'
      # session[:utorid] = request.env['HTTP_X_FORWARDED_USER']
    else
      # Grab from shib
      false
    end
  end

  def check
    # puts 'Check one two three'
    true
  end
end
