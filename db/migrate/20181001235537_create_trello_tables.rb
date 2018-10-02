class CreateTrelloTables < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :name
    end

    create_table :columns do |t|
      t.belongs_to :board
      t.string :name
      t.integer :position
    end

    create_table :tasks do |t|
      t.belongs_to :column
      t.string :name
      t.integer :position
    end
  end
end
