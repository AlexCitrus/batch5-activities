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
        puts "Charged #{val}%"
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
    def battery_level=(battery_level)
        super
        puts "Battery level is #{battery_level}"
    end
end

class Phone < Laptop
    def battery_level=(battery_level)
        super
        
    end
end

class Computer
    include ComputeDevice
end

mac = Laptop.new
mac.battery_level = 20
mac.charge(30)
mac.check_cell_signal


iPhone = Phone.new
iPhone.battery_level = 80
iPhone.charge(20)

iMac = Computer.new
iMac.boot


