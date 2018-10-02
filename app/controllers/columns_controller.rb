class ColumnsController < ApplicationController
  before_action :set_board, only: [:index, :new, :create]

  def index
    @columns = @board.columns.ordered
    respond_to do |format|
      format.json { render json: @columns }
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
    @column = @board.columns.build column_params
    respond_to do |format|
      if @column.save
        format.json { render json: @column }
      else
        format.json { render json: @column.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  def update
    @column = Column.find params[:id]
    respond_to do |format|
      if @column.update column_params
        format.json { render json: @column }
      else
        format.json { render json: @column.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @column = Column.find params[:id]
    @column.destroy
    head :no_content
  end

  private
    def set_board
      @board = Board.find params[:board_id]
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def column_params
      params.fetch(:column).permit(:name, :position)
    end
end
