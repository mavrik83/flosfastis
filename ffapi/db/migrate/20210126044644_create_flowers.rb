class CreateFlowers < ActiveRecord::Migration[6.0]
  def change
    create_table :flowers do |t|
      t.string :variety
      t.string :sowing_time
      t.string :soil_temp
      t.string :planting_depth
      t.string :grow_height
      t.string :spread
      t.string :sun_light
      t.boolean :annual
      t.boolean :sow_indoors
      t.string :transplant
      t.string :days_to_maturity
      
      t.timestamps
    end
  end
end