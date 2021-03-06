class AddUserCreatedToFlowers < ActiveRecord::Migration[6.0]
  def change
    add_column :flowers, :user_created, :boolean, default: false
  end
end
