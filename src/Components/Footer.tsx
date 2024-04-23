
const Footer = () => {
    const date = new Date

    return (
        <div className="w-full p-[20px] py-[50px] bg-primary mt-[100px]">
            <div className="flex">
                <p className="text-white max-w-[500px]">Barcha huquqlar himoyalangan © {date.getFullYear()} Samarqand shahar kasb-hunar maktabi | Sayt materiallaridan foydalanilganda www.samcli.uz manbasi ko`rsatilishi sahrt</p>
            </div>
        </div>
    )
}

export default Footer