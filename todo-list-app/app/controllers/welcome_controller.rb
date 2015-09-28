class WelcomeController < ApplicationController
  def index
    @tasks = Task.all
    # TODO: Use node WS
  end
end
