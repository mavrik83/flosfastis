# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_26_044644) do

  create_table "flowers", force: :cascade do |t|
    t.string "variety"
    t.string "indoor_sowing_date"
    t.string "outdoor_sowing_date"
    t.integer "grow_height"
    t.integer "spread"
    t.string "soil"
    t.string "sun_light"
    t.integer "days_to_germination"
    t.string "soil_temp"
    t.string "planting_depth"
    t.integer "weeks_to_transplant"
    t.boolean "annual"
    t.boolean "perennial"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "schedules", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
