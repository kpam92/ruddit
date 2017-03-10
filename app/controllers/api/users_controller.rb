class UsersController < ApplicationController

  def create
  end

  def index
  end

  def show
  end

  private

  def user_params
    params.require(:user).permit(:username,:password)
  end

end
