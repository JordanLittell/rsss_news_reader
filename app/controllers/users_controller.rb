class UsersController < ApplicationController
  
  def new
    
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      render :json => @user
    else
      render :json => @user.errors.full_messages, status: :unprocessable_entity
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
