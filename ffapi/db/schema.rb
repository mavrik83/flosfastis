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

ActiveRecord::Schema.define(version: 2021_02_05_141442) do

  create_table "events", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "begin_time"
    t.string "harvest_day"
    t.string "planting_day"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "flowers", force: :cascade do |t|
    t.string "variety"
    t.string "sowing_time"
    t.string "soil_temp"
    t.string "planting_depth"
    t.string "grow_height"
    t.string "spread"
    t.string "sun_light"
    t.boolean "annual"
    t.boolean "sow_indoors"
    t.string "transplant"
    t.string "days_to_maturity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "user_created", default: false
  end

end
