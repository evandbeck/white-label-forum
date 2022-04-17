class PostsController < ApplicationController
  before_action :set_post, only: [:update, :destroy]

  # GET /posts
  def index
    subforum = Subforum.find(params[:subforum_id])
    @posts = subforum.posts

    render json: @posts
  end

  # GET /posts/1
  def show
    post = Post.find_by(id: params[:id])
    if post
      render json: post
    else
      render json: { error: "Post not found"}, status: :not_found
    end
  end

  # POST /posts
  def create
    post = Post.create!(post_params)
    render json: post, status: :created
  end

  # PATCH/PUT /posts/1
  def update
    post = Post.find_by(id: params[:id])
    if post
      post.update(post_params)
      render json: post
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
