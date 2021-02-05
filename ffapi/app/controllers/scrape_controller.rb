class ScrapeController < ApplicationController
  def show
    slug = params[:zipCode]
    url = URI.open("https://www.almanac.com/gardening/frostdates/zipcode/#{slug}")
    doc = Nokogiri::HTML(url)

    alt = doc.css('td')[1].text
    last_spring_frost = doc.css('td')[2].text
    first_fall_frost = doc.css('td')[3].text
    growing_season = doc.css('td')[4].text

    frost_data = { "altitude": alt, "lastSpringFrost": last_spring_frost, "firstFallFrost": first_fall_frost, "growingSeason": growing_season }

    render json: frost_data
  end
end
