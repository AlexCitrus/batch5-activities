module PortableDevice

    def battery_level
        @battery_level
    end
    
    def battery_level=(battery_level)
        @battery_level = battery_level
    end

    def check_cell_signal
        puts "Searching cell site..."
    end

    def charge(val)
        self.battery_level += val
    end
end

module ComputeDevice
    def boot
        puts "Booting device..."
    end
end



class Laptop 
    include PortableDevice
end

class Phone
    include PortableDevice
end

class Computer
    include ComputeDevice
end

mac = Laptop.new
mac.battery_level = 20
mac.charge(30)
mac.check_cell_signal
puts mac.battery_level

