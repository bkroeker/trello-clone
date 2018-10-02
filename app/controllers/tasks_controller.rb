class TasksController < ApplicationController
  before_action :set_column, only: [:index, :new, :create]

  def index
    @tasks = @column.tasks
    respond_to do |format|
      format.json { render json: @tasks }
    end
  end

  def show
    @task = Task.find params[:id]

    respond_to do |format|
      format.html { render 'pages/root' }
      format.json { render json: @task}
    end
  end

  def new
    @task = Task.new
    respond_to do |format|
      format.html { render 'pages/root' }
    end
  end

  def create
    @task = @column.tasks.build task_params
    respond_to do |format|
      if @task.save
        format.json { render json: @task }
      else
        format.json { render json: @task.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  def update
    @task = Task.find params[:id]
    respond_to do |format|
      if @task.update task_params
        format.json { render json: @task }
      else
        format.json { render json: @task.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @task = Task.find params[:id]
    @task.destroy
    head :no_content
  end

  private
    def set_column
      @column = Column.find params[:column_id]
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def task_params
      params.fetch(:task).permit(:name, :position, :column_id)
    end
end
