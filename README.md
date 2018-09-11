# COOPEX Trading UI

## Installation steps

1. Git clone
2. Bundle Install
3. Search for 'coopex.market' in the repository (use the search bar above) and make sure you replace all instances of it with your application URL (will be moving to ENV variables soon)
4. For production, you can do rake assets:precompile RAILS_ENV=production
5. bundle exec rails s

View a working version of this UI at https://coopex.market/trading/igeth
If it tells you to log in, just try the link again.



# To do: 
## `Tradingview integration, de-caffeinate, full conversion to angular/react (angular branch is just for modeling and is non-functional), loading subset of order book for scalability`
