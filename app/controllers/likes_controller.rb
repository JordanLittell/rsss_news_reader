class LikesController < ApplicationController
  def create
    @like = 
  end

  def destroy
  end
  
  private 
  
  def like_params
    params.require(:like).permit(:user_id, :feed_id)
  end
end
