class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized_user

  def current_user
    User.find_by(id:session[:current_user])
  end

  def authorized_user
    return render json: {error: "Unauthorized"}, status: :unauthorized unless current_user
  end

end
