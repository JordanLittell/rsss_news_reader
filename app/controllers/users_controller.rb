class UsersController < ApplicationController
  
  def new
    
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(user)
      redirect_to root_url
    else
      flash[:errors] = @user.errors.full_messages
      render new_user_path
    end
  end
  
  def show
    @user = User.find(params[:id])
    if @user
      render :json => @user
    else
      render :json => @user.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :json => @user
    else
      render :json => @user.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
