class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :description
      t.datetime :start_at
      t.integer :duration

      t.timestamps null: false
    end
  end
end
