class CreateFlowers < ActiveRecord::Migration[6.0]
  def change
    create_table :flowers do |t|
      t.string :variety
      t.string :indoor_sowing_date
      t.string :outdoor_sowing_date
      t.integer :grow_height
      t.integer :spread
      t.string :soil
      t.string :sun_light
      t.integer :days_to_germination
      t.string :soil_temp
      t.string :planting_depth
      t.integer :weeks_to_transplant
      t.boolean :annual
      t.boolean :perennial

      t.timestamps
    end
  end
end
