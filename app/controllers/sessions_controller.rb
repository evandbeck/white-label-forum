class SessionsController < ApplicationController
    def login
        user = User.find_by!(username:params[:username])
        if user&.user.authenticate(params[:password])
            render json: user, status: :ok
        else
            render json: {error: "Invalid Username or Password"}, status: :unprocessable_entity
        end
    end
end
