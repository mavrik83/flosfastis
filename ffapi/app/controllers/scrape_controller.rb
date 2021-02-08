class ScrapeController < ApplicationController
  def show
    slug = params[:zipCode]
    url = URI.open("https://www.almanac.com/gardening/frostdates/zipcode/#{slug}")
    doc = Nokogiri::HTML(url)
    if doc && doc.css('th')[0]
      loc = doc.css('td')[0].text
      alt = doc.css('td')[1].text
      last_spring_frost = doc.css('td')[2].text
      first_fall_frost = doc.css('td')[3].text
      growing_season = doc.css('td')[4].text
    else
      loc = 'Data unavailable, default provided.'
      alt = ''
      last_spring_frost = 'Apr 15'
      first_fall_frost = ''
      growing_season = ''
    end

    frost_data = { "location": loc, "altitude": alt, "lastSpringFrost": last_spring_frost, "firstFallFrost": first_fall_frost, "growingSeason": growing_season }

    render json: frost_data
  end
end
