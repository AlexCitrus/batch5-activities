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

    def charge
        self.battery_level += 1
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
mac.charge
puts mac.battery_level

