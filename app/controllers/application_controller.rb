class ApplicationController < ActionController::Base
  # protect_from_forgery
  helper_method :current_user, :logged_in?
  
  def current_user
    User.find_by_session_token(session[:session_token])
  end
  
  def logged_in?
    !!current_user
  end
  
  def login!(user)
    session[:session_token] = user.session_token
  end
  
  def logout!
    current_user.session_token = User.generate_session_token
    session[:session_token] = nil
  end
end
