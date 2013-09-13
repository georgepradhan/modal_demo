get '/' do
  erb :index
end

get '/modal' do 
  erb :_modal, layout: false
end
