class CommentChannel < ApplicationCable::Channel
  def subscribed
    @item = Item.find(params[:item_id]) # 追記
    stream_for @item # 追記

    #stream_from "comment_channel" #削除
    
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
