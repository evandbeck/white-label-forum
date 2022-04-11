class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :create, :destroy]

  # GET /posts
  def index
    posts = Post.all
    render json: posts
  end

  # GET /posts/1
  def show
    render json: post
  end

  # POST /posts
  def create
    byebug
    post = Post.create!(post_params)
    render json: post, status: :created
  end

  # PATCH/PUT /posts/1
  def update
    post = Post.find_by(id: params[:id])
    if post
      post.update(post_params)
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    post = Post.find_by(id: params[:id])
    if post
      post.destroy
      head :no_content
    else
      render json: { error: "Post not found" }, status: :not_found
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.permit(:name, :description, :subforum_id, :user_id)
    end
end
