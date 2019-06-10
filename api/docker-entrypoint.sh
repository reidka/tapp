#! /bin/sh
echo "RUNNING MIGRATIONS"
bundle exec rails db:reset

if [[ $? != 0 ]]; then
  echo
  echo "== Failed to migrate. Running setup first."
  echo
  bundle exec rails db:setup
fi

# Execute the given or default command:
exec "$@"