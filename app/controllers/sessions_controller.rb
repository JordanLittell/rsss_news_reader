class SessionsController < ApplicationController
  
  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if user
      login!(user)
      redirect_to root_url
    else
      flash[:errors] = ["There was a problem with your submission"]
      render "new"
    end
  end
  
  def destroy
    logout!
    redirect_to root_url
    flash[:success] = ["you have logged out"]
  end
  
  def new
    @user = User.new()
    render 
  end
  
end
