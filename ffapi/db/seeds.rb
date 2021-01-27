# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

require 'csv'
csv_text = File.read(Rails.root.join('lib/seeds/flowers.csv'))
csv = CSV.parse(csv_text, liberal_parsing: true, headers: true, encoding: 'ISO-8859-1')
csv.each do |row|
  Flower.create({
                  variety: row[0],
                  indoor_sowing_date: row[1],
                  days_to_germination: row[2],
                  soil_temp: row[3],
                  planting_depth: row[4],
                  weeks_to_transplant: row[5],
                  outdoor_sowing_date: row[6],
                  grow_height: row[7],
                  spread: row[8],
                  soil: row[9],
                  sun_light: row[10],
                  annual: row[11],
                  perennial: row[12]
                })
end
