class AddHostToPage < ActiveRecord::Migration
  def change
    add_column :pages, :host, :string
  end
end
