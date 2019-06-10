class AuthenticateUser
    prepend SimpleCommand
  
    def initialize(utorid)
      @utorid = utorid
    end
  
    def call
      {token: JsonWebToken.encode(user_id: user.id, type: user.class.name), type: user.class.name} if user
    end
  
    private
  
    attr_accessor :utorid
  
    def user
      user = User.find_by_utorid(utorid) || Applicant.find_by_utorid(utorid)
      user ||= Applicant.create!({utorid: utorid, email: '', first_name: '', last_name: '', student_number: ''})
      return user if user
  
      errors.add :user_authentication, 'invalid utorid'
      nil
    end
  end