class BoardsController < ApplicationController
  def index
    @boards = Board.ordered
    respond_to do |format|
      format.json { render json: @boards }
    end
  end

  def show
    @board = Board.find params[:id]

    respond_to do |format|
      format.html { render 'pages/root' }
      format.json { render json: @board}
    end
  end

  def new
    @board = Board.new
    respond_to do |format|
      format.html { render 'pages/root' }
    end
  end

  def create
    @board = Board.new board_params
    respond_to do |format|
      if @board.save
        format.json { render json: @board }
      else
        format.json { render json: @board.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @board = Board.find params[:id]
    @board.destroy
    head :no_content
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def board_params
      params.fetch(:board).permit(:name)
    end
end
