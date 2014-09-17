class SessionsController < ApplicationController
  
  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if user
      login!(user)
      render :json => user
    else
      render :json => user.errors.full_messages
    end
  end
  
  def destroy
    logout!
    render :json => "sup"
  end
  
  def new
    @user = User.new()
    render :json => @user
  end
  
end
