class LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save 
    	render :json => @like 
    else 
    	render :json => @like.errors.full_messages
    end
  end

  def destroy
  	@like = Like.find(params[:id])
  	if @like.destroy
  		render :json => @like
  	else
  		render :json => @like.errors.full_messages
  	end
  end
  
  private 
  
  def like_params
    params.require(:likes).permit(:feed_id)
  end
end
