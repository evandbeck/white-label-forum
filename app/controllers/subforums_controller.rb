class SubforumsController < ApplicationController
  before_action :set_subforum, only: [:show, :update, :destroy]

  # GET /subforums
  def index
    subforums = Subforum.all
    render json: subforums
  end

  # GET /subforums/1
  def show
    render json: @subforum
  end

  # POST /subforums
  def create
    @subforum = Subforum.new(subforum_params)

    if @subforum.save
      render json: @subforum, status: :created, location: @subforum
    else
      render json: @subforum.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /subforums/1
  def update
    if @subforum.update(subforum_params)
      render json: @subforum
    else
      render json: @subforum.errors, status: :unprocessable_entity
    end
  end

  # DELETE /subforums/1
  def destroy
    @subforum.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_subforum
      @subforum = Subforum.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def subforum_params
      params.require(:subforum).permit(:name, :category, :description)
    end
end
