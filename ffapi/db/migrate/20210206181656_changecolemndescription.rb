class Changecolemndescription < ActiveRecord::Migration[6.0]
  def change
    rename_column :events, :description, :location
    # Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
