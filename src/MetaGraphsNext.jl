module MetaGraphsNext

using JLD2
using Graphs
using SimpleTraits

export MetaGraph
export label_for, code_for, labels
export set_data!
export weighttype, default_weight, get_weight_function
export MGFormat, DOTFormat

include("metagraph.jl")
include("directedness.jl")
include("graphs.jl")
include("dict_utils.jl")
include("weights.jl")
include("persistence.jl")

end # module
