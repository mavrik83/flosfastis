# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

require 'csv'
csv_text = File.read(Rails.root.join('lib/seeds/flowerset.csv'))
csv = CSV.parse(csv_text, liberal_parsing: true, headers: true, encoding: 'UTF-8')
csv.each do |row|
  Flower.create({
                  variety: row[0],
                  sowing_time: row[1],
                  soil_temp: row[2],
                  planting_depth: row[3],
                  grow_height: row[4],
                  spread: row[5],
                  sun_light: row[6],
                  annual: row[7],
                  sow_indoors: row[8],
                  transplant: row[9],
                  days_to_maturity: row[10]

                })
end
