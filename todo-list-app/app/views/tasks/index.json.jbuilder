json.array!(@tasks) do |task|
  json.extract! task, :id, :description, :start_at, :duration
  json.url task_url(task, format: :json)
end
