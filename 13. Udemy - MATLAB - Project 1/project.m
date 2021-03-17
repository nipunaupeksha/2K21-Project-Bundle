%step 1
file = fileread('Example_text.txt');

%step 2 
p = '[.,''!?]';
file = regexprep(file,p,' ');

%step 3
file = strsplit(file,' ');

%step 4
frequencies = tabulate(file);

%step 5
[freq,index] = sort(cell2mat(frequencies(:,3)),'descend');

%step 6
bar(categorical(frequencies(index(1:10),1)),cell2mat(frequencies(index(1:10),3)));
