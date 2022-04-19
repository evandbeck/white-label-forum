class UserProfileController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    def show
        user = User.find_by(id: params[:id])
    if user
        render json: user
    else
        render json: { error: "Post not found"}, status: :not_found
    end
    end
end
