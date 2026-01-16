# Patch Pathutil#read for Ruby 3.x keyword args compatibility in Jekyll 3.9
require 'pathutil'

class Pathutil
  def read(*args, **kwargs, &block)
    ::File.read(@path, *args, **kwargs, &block)
  end
end
