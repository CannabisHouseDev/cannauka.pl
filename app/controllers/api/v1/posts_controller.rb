module API
  module V1
    class PostsController < ApplicationController
      before_action :find_post, only: [:show, :update, :destroy]
      def index
        @posts = Post.all
        render json: @posts
      end

      def create
        @post = Post.new(post_params)
        if @post.save
          render json: @post, status: :created
        else
          render json: @post.errors, status: :unprocessable_entity 
        end
      end

      def show
        render json: @post
      end

      def update
        if @post.update(post_params)
          render json: @post, status: :ok
        else
          render json: @post.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @post.destroy
        head :no_content
      end

      private
      def find_post
        @post = Post.find(params[:id])
      end

      def post_params
        params.require(:post).permit(:title, :body)
      end
    end
  end
end