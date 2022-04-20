class UserProfileController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    def show
        user = User.find_by(id: params[:id])
    if user
        render json: user
    else
        render json: { error: "User not found"}, status: :not_found
    end
    end

    def update
        user = User.find_by(id: params[:id])
    if user
        user.update(user_params)
        render json: user
    else
        render json: user.errors, status: :unprocessable_entity
    end
    end

    private

    def user_params
      params.require(:user_profile).permit(:id, :username, :email, :password, :first_name, :last_name, :user)
    end
end
