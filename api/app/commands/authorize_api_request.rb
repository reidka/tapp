class AuthorizeApiRequest
    prepend SimpleCommand
  
    def initialize(headers = {})
      @headers = headers
    end
  
    def call
      user
    end
  
    private
  
    attr_reader :headers
  
    def user
      user_class = decoded_token[:type].constantize if decoded_token
      @user = user_class.find(decoded_token[:user_id]) if decoded_token
      @user || errors.add(:token, 'Invalid token') && nil
    end
  
    # decode the jwt token hash
    def decoded_token
      @decoded_token = JsonWebToken.decode(http_auth_header)
    end
  
    # checks if the request contains a jwt token in the header
    def http_auth_header
      if headers['Authorization'].present?
        return headers['Authorization'].split(' ').last
      else
        errors.add(:token, 'Missing token')
      end
      nil
    end
  end