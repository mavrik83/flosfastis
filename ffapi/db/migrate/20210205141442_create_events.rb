class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :description
      t.integer :begin_time
      t.string :harvest_day
      t.string :planting_day

      t.timestamps
    end
  end
end
