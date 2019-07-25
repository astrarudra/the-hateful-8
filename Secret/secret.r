setwd("D:/REPO/hateful8/Secret")
temp = list.files(pattern="*.csv")
# getting all file names
for (i in 1:length(temp)) assign(temp[i], read.csv(file=temp[i], header=TRUE, sep=",")) 

rownames = c()
colnames = c("Date")
matrix = c()

for (i in 1:length(temp)){
  # reading each file, getting country and date
  data <- read.csv(file=temp[i], header=TRUE, sep=",")
  country <- data[1,2]
  date <- data[4,2]
  append(rownames, date)
  append(colnames, country)
  value = aggregate(data[7:,2] #Aggregate the values
  matrix[country][date] = value
}

# plot chart 
plot(matrix,"I",,"Country","Sales")