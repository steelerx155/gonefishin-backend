class AddForeignKeyToFeatures < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :destinations, :features
  end
end
